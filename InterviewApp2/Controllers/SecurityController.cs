using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InterviewApp2.Dto;
using System.Security.Cryptography.X509Certificates;
using Jose;

namespace InterviewApp2.Controllers
{
    [Produces("application/json")]
    [Route("api/Security")]
    public class SecurityController : Controller
    {

        [HttpGet]
        public IActionResult Get()
        {
            //put some code to retrieve admin groups

            var payload = new Dictionary<string, object>()
            {
                { "user", HttpContext.User.Identity.Name },
                
                { "exp", 1300819380 }
            };

            var privateKey = new X509Certificate2("my-key.p12", "password").GetRSAPrivateKey();

            string token = Jose.JWT.Encode(payload, privateKey, JwsAlgorithm.RS256);
            return new ObjectResult(new UserDto() { IsAuthenticated = HttpContext.User.Identity.IsAuthenticated, IsAdmin = true });
        }
    }
}