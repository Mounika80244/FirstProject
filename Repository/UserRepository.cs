using System.Collections.Generic;
using System.Linq;
using FirstApi.Model;
using FirstApi.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FirstApi.Repository
{
    public class UserRepository :IUserRepository
    { public DataContext dbdata;
        public UserRepository(DataContext data)
        {
            dbdata=data;
        }
        public List<User> Get(){
              return dbdata.User.ToList();
        }

         public User Get(int id)
        {
            return dbdata.User.ToList().FirstOrDefault(p => p.Id==id);
        }
    
        public void AddUser(User userdata)
        {
            dbdata.User.Add(userdata);
        }

         public void Delete(User userdata)
         {
            dbdata.User.Remove(userdata);
        }
        public async Task<bool> SaveChanges()
        {
            return await dbdata.SaveChangesAsync()>0;
        }
        // public void put(User user){
        //     dbdata.User.Update(user);
        // }
    }
}