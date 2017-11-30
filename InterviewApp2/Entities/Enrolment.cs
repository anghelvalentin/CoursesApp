using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class Enrolment
    {
        public int CourseId { get; set; }

        public int UserId { get; set; }

        [ForeignKey("Id")]
        public virtual Course Course { get; set; }

    }
}
