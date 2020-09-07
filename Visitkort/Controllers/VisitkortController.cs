using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Visitkort.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Visitkort.Controllers
{
    [Route("api/[controller]")]
    public class VisitkortController : Controller
    {
         VisitkortDataAccessLayer objvisitkort = new VisitkortDataAccessLayer();
        [HttpGet]
        [Route("api/Visitkort/Index")]
        public IEnumerable<VisitkortClass> Index()
        {
            return objvisitkort.GetAllVisitkort();
        }
        [HttpPost]
        [Route("api/Visitkort/Create")]
        public int Create([FromBody] VisitkortClass visitkort)
        {
            return objvisitkort.AddVisitkort(visitkort);
        }
        [HttpGet]
        [Route("api/Visitkort/Details/{id}")]
        public VisitkortClass Details(int id)
        {
            return objvisitkort.GetVisitkortData(id);
        }   
        [HttpPut]
        [Route("api/Visitkort/Edit")]
    
        public int Edit([FromBody]VisitkortClass visitkort)
        {
            return objvisitkort.UpdateVisitkort(visitkort);
        }
        [HttpDelete]
        [Route("api/Visitkort/Delete/{id}")]
        public int Delete(int id)
        {
            return objvisitkort.DeleteVisitkort(id);
        }
        //// GET: api/<controller>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
