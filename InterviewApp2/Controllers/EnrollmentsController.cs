using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InterviewApp2.Entities;
using InterviewApp2.Dto;
using Microsoft.EntityFrameworkCore;

namespace InterviewApp2.Controllers
{
    [Produces("application/json")]
    [Route("api/Enrollments")]
    public class EnrollmentsController : Controller
    {
        private readonly AppDbContext _context;

        public EnrollmentsController(AppDbContext context)
        {
            this._context = context;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Dto.EnrolmentDto enrolmentDto)
        {
            if (enrolmentDto.CourseId < 1)
            {
                return BadRequest();
            }

            var enrolment = new Entities.Enrolment() { CourseId = enrolmentDto.CourseId, UserId = HttpContext.User.Identity.Name };
            _context.Enrollments.Add(enrolment);
            _context.SaveChanges();
            return CreatedAtRoute("GetEnrolment", new { id = enrolment.CourseId }, enrolment);
        }


        [HttpGet]
        public IEnumerable<CourseDto> GetEnrollments()
        {
            var enrolments = _context.Enrollments
               .Where(e => e.UserId.Equals(HttpContext.User.Identity.Name)).Include(e => e.Course).Select(e => new CourseDto()
               {
                   Date = e.Course.Date,
                   Description = e.Course.Description,
                   ImageUrl = e.Course.ImageUrl,
                   Name = e.Course.Name,
                   Price = e.Course.Price,
                   Spots = e.Course.Spots
               });

            return enrolments;
        }

        [HttpGet("{id}", Name = "GetEnrolment")]
        public IActionResult GetEnrolment(int id)
        {
            var enrolment = _context.Enrollments
               .Where(e => e.CourseId.Equals(id) && e.UserId.Equals(HttpContext.User.Identity.Name)).Include(e => e.Course).SingleOrDefault();
            var couresEnrolment = new CourseEnrolmentDto();
            if (enrolment == null)
            {
                var course = _context.Courses.Where(c => c.Id == id).SingleOrDefault();
                if (course == null)
                {
                    return NotFound();
                }
                couresEnrolment.Course = new Dto.CourseDto()
                {
                    Date = course.Date,
                    Description = course.Description,
                    ImageUrl = course.ImageUrl,
                    Name = course.Name,
                    Price = course.Price,
                    Spots = course.Spots
                };
            }
            else
            {

                couresEnrolment.Course = new Dto.CourseDto()
                {
                    Date = enrolment.Course.Date,
                    Description = enrolment.Course.Description,
                    ImageUrl = enrolment.Course.ImageUrl,
                    Name = enrolment.Course.Name,
                    Price = enrolment.Course.Price,
                    Spots = enrolment.Course.Spots
                };
                couresEnrolment.Enrolment = new Dto.EnrolmentDto()
                {
                    CourseId = enrolment.CourseId,
                    UserId = HttpContext.User.Identity.Name
                };
            }

            return new ObjectResult(couresEnrolment);
        }




        [HttpDelete("{id}")]
        public IActionResult DeleteEnrolment(int id)
        {
            var enrolment = _context.Enrollments.Where(e => e.CourseId == id && e.UserId.Equals(HttpContext.User.Identity.Name)).SingleOrDefault();
            if (enrolment == null)
                return NotFound();

            _context.Remove(enrolment);
            _context.SaveChanges();
            return new NoContentResult();
        }

        //[HttpGet]
        //public IEnumerable<int> GetUserEnrollments()
        //{
        //    return _context.Enrollments.Where(e => e.UserId.Equals(HttpContext.User.Identity.Name)).Select(e => new { e.CourseId });
        //}
    }
}