using Microsoft.EntityFrameworkCore;
using FirstApi.Entities;
using FirstApi.Model;
using FirstApi.Controllers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstApi.Repository
{
    public interface IUserRepository
    {
         public List<User> Get();
         public User Get(int id);
         public void AddUser(User userData);
        
         public void Delete(User user);
        public  Task<bool> SaveChanges();
        // public void put(User user);
    }
}