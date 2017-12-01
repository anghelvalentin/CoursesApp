using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Dto
{
    public class CourseEnrolmentDto
    {
        public CourseDto Course { get; set; }

        public EnrolmentDto Enrolment { get; set; }
    }
}
