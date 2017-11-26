using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Dto
{
    public class CourseDto
    {
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }


        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public string Url { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public DateTime Date { get; set; }


        public UInt16 Spots { get; set; }
    }
}
