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

        public string UserId { get; set; }

        public int CourseId { get; set; }

        public virtual Course Course { get; set; }

    }
}