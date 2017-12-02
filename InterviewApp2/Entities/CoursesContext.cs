using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Enrolment>()
                .HasKey(e => new { e.CourseId, e.UserId });
        }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Enrolment> Enrollments { get; set; }

        public DbSet<UserGroup> UserGroups { get; set; }
    }
}
