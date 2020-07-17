using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
 using FirstApi.Entities;
using FirstApi.Model;
using FirstApi.Repository;


namespace FirstApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentDetailsController : ControllerBase
    {

        private readonly IUserRepository _RepoData;

        // private readonly DataContext _Data;
    //    List <User> StudentList=new List<User>();
       public StudentDetailsController(IUserRepository RepoUser)
       { 

           _RepoData=RepoUser;
        //  StudentList.Add(
        //     new User
        //     {
        //         Id=1,
        //         Name="Mounika",
        //         PhoneNo="345567778",
        //         Address="Exalca"
        //     });
        //     StudentList.Add(
        //     new User
        //     {
        //         Id=2,
        //         Name="Mathu",
        //         PhoneNo="345567778",
        //         Address="Exalca"
        //     });
        //     StudentList.Add(
        //     new User
        //     {
        //         Id=3,
        //         Name="mithuna",
        //         PhoneNo="345567778",
        //         Address="Exalca"
        //     });
            // new User
            // {
            //     Id=2,
            //     Name="Mathu",
            //     PhoneNo="45799886",
            //     Address="Exalca"
            // },
            // new User
            // {
            //     Id=3,
            //     Name="Mithuna",
            //     PhoneNo="976543221",
            //     Address="Exalca"
            // },
            // new User
            // {
            //     Id=4,
            //     Name="sujitha",
            //     PhoneNo="696545454",
            //     Address="Exalca"
            // }
           
       }
    [HttpGet]
     public IActionResult Get()
        {
            return Ok(_RepoData.Get());
            
            // return _Data.User.ToList();
        }
   
    [HttpGet("{id}")]
     public IActionResult Get(int id)
        {
            return Ok(_RepoData.Get(id));
        }
        [HttpPost]
      public async Task<IActionResult> Post (User user)
      {
          if(user!=null)
          {
              _RepoData.AddUser(user);
              if(await _RepoData.SaveChanges())
              {
                  return Created($"api/studentdetails/{user.Id}",user);

              }
          }
           return BadRequest("Failed");
      }

     [HttpDelete("{id}")]
      public async Task<IActionResult> Delete (int id)
      {
          if(id!=null)
          {
             User user= _RepoData.Get(id);
              _RepoData.Delete(user);
              if(await _RepoData.SaveChanges())
              {
                  return NoContent();

              }
          }
           return BadRequest("Failed");
      }
  [HttpPut("{id}")]
      public async Task<IActionResult> put (int id,User user)
      {
          User data= _RepoData.Get(id);
             data.PhoneNo=user.PhoneNo;
              data.Name=user.Name;
             data.Password=user.Password;
             
              if(await _RepoData.SaveChanges())
              {
                  return NoContent();

              }
         else{
           return BadRequest("Failed");
         }
      }


    }
}
//  [HttpGet]
//         public string  Get()
//         {
//             return "exalca";
//         }


//      [HttpGet("{id}")]
//         public string  Get(int id)
//         {
//             return "exalca";
//         }






