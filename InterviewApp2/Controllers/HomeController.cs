using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using InterviewApp2.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Cryptography.X509Certificates;
using Jose;
using InterviewApp2.Entities;

namespace InterviewApp2.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            this._context = context;
        }

        public IActionResult Index()
        {
            var payload = new Dictionary<string, object>()
            {
                { "user", HttpContext.User.Identity.Name },
            };

            var group = _context.UserGroups.Where(g => HttpContext.User.IsInRole(g.AdName)).FirstOrDefault();
            if (group != null)
            {
                payload.Add("isAdmin", true);
            }
            else
            {
                payload.Add("isAdmin", false);
            }


            var secretKey = new byte[] { 164, 60, 194, 0, 161, 189, 41, 38, 130, 89, 141, 164, 45, 170, 159, 209, 69, 137, 243, 216, 191, 131, 47, 250, 32, 107, 231, 117, 37, 158, 225, 234 };

            string token = Jose.JWT.Encode(payload, secretKey, JwsAlgorithm.HS256);

            return View(new TokenModel() { Token = token });
        }


        [Authorize]
        public IActionResult Test()
        {
            return Content("A mers");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
