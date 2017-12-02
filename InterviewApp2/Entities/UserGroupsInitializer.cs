using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class UserGroupsInitializer
    {
        private AppDbContext _context;

        public UserGroupsInitializer(AppDbContext context)
        {
            _context = context;
        }



        public async Task Seed()
        {
            if (!_context.UserGroups.Any())
            {
                _context.Add(new UserGroup() { AdName = "Coursera_admin" });
                await _context.SaveChangesAsync();
            }
        }

    }
}
