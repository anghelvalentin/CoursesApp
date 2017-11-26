using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class CoursesContext : DbContext
    {
        public CoursesContext(DbContextOptions<CoursesContext> options) : base(options)
        {

        }

        public DbSet<Course> Courses { get; set; }
    }
}
