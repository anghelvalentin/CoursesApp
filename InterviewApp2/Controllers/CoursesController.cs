using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InterviewApp2.Entities;
using InterviewApp2.Dto;
using Microsoft.AspNetCore.Authorization;

namespace InterviewApp2.Controllers
{
    [Produces("application/json")]
    [Route("api/Courses")]
    public class CoursesController : Controller
    {
        private readonly AppDbContext _context;


        public CoursesController(AppDbContext context)
        {
            _context = context;
            if (_context.Courses.Count() == 0)
            {
                _context.Courses.Add(new Entities.Course()
                {
                    Name = "C# for beginners",
                    Date = DateTime.Now.AddMonths(3),
                    Spots = 30,
                    FreeSpots = 30,
                    ImageUrl = "https://udemy-images.udemy.com/course/304x171/382002_5d4a.jpg",
                    Price = 9.99m,
                    Description = "Learn C# and programming mindset using high-quality, bite-sized videos with real-world examples and lots of exercises."
                });
                _context.Courses.Add(new Entities.Course()
                {
                    Name = "C# for experts",
                    Date = DateTime.Now.AddDays(10),
                    Spots = 10,
                    FreeSpots = 10,
                    Price = 29.99m,
                    Description = "Get to grips with the mechanics of .NET and C# to help you write powerful applications more efficiently.",
                    ImageUrl = "https://udemy-images.udemy.com/course/304x171/802808_6b28.jpg"
                });
                _context.Courses.Add(new Entities.Course()
                {
                    Name = "Angular 4",
                    Date = DateTime.Now.AddMonths(4),
                    Spots = 30,
                    FreeSpots = 15,
                    Price = 14.99m,
                    Description = "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile.",
                    ImageUrl = "https://udemy-images.udemy.com/course/304x171/1247828_32bb.jpg"
                });
                _context.Courses.Add(new Entities.Course()
                {
                    Name = "Javascript Vanilla",
                    Date = DateTime.Now.AddMonths(5),
                    Spots = 30,
                    FreeSpots = 20,
                    Price = 4.99m,
                    Description = "Vanilla JavaScript for writing powerful web applications without jQuery.",
                    ImageUrl = "https://udemy-images.udemy.com/course/304x171/670034_ce04_4.jpg"
                });
                _context.SaveChanges();
            }
        }


        [HttpGet]
        public IEnumerable<Entities.Course> GetAll()
        {
            return _context.Courses;
        }


        [HttpGet("{id}", Name = "GetCourse")]
        public IActionResult GetById(int id)
        {
            var course = _context.Courses.FirstOrDefault(t => t.Id == id);
            if (course == null)
            {
                return NotFound();
            }
            return new ObjectResult(course);
        }


        [HttpPost]
        [Authorize(Roles = "Coursera_admin")]
        public IActionResult Create([FromBody] Dto.CourseDto courseDto)
        {
            if (courseDto == null)
                return BadRequest();

            Entities.Course course = new Entities.Course()
            {
                Date = courseDto.Date,
                Description = courseDto.Description,
                Name = courseDto.Name,
                Spots = courseDto.Spots,
                FreeSpots = courseDto.Spots,
                Price = courseDto.Price,
                ImageUrl = courseDto.ImageUrl
            };
            _context.Courses.Add(course);

            _context.SaveChanges();
            return CreatedAtRoute("GetCourse", new { id = course.Id }, course);
        }


        [HttpDelete("{id}")]
        [Authorize(Roles = "Coursera_admin")]
        public IActionResult Delete(int id)
        {
            var course = _context.Courses.Where(c => c.Id == id).SingleOrDefault();
            if (course == null)
            {
                return NotFound();
            }

            _context.Enrollments.RemoveRange(_context.Enrollments.Where(e => e.CourseId == id));
            _context.Courses.Remove(course);
            _context.SaveChanges();

            return new NoContentResult();
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Coursera_admin")]
        public IActionResult Update(int id, [FromBody]Course course)
        {
            if (course == null || id != course.Id)
            {
                return BadRequest();
            }

            var courseToUpdate = _context.Courses.Where(c => c.Id == id).SingleOrDefault();
            if (courseToUpdate == null)
            {
                return NotFound();
            }
            courseToUpdate.Name = course.Name;
            courseToUpdate.Date = course.Date;
            courseToUpdate.Description = course.Description;
            courseToUpdate.FreeSpots = course.FreeSpots;
            courseToUpdate.ImageUrl = course.ImageUrl;
            courseToUpdate.Spots = course.Spots;
            courseToUpdate.Price = course.Price;

            _context.Courses.Update(courseToUpdate);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}