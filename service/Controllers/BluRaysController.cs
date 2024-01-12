using Data;
using Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
namespace service.Controllers;


[ApiController]
[Route("blu-rays")]
public class BluRaysController : ControllerBase
{
  private readonly BluRayContext _context;

  // Context shouldn't be called in Controller, should be called in sepearate file's service
  public BluRaysController(BluRayContext context)
  {
    _context = context;
  }

  // GET: api/blurays
  [HttpGet]
  [Authorize]
  public async Task<ActionResult<IEnumerable<BluRay>>> GetBluRays()
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      //GetBluRays method, add parameter of string searchString to above method declaration- entity framework filtering
      var foundBluRays = await _context.BluRays.ToListAsync();
      List<BluRay> returnedBluRays = new List<BluRay> { };

      for (int i = 0; i < foundBluRays.Count; i++)
      {
        string dbOwner = foundBluRays[i].Owner;
        string rqOwner = headers["owner"];
        if (Equals(dbOwner, rqOwner))
        {
          returnedBluRays.Add(foundBluRays[i]);
        }
      }

      return returnedBluRays;
    }
    else
    {
      return BadRequest();
    }

  }

  // GET: api/blurays/5
  [HttpGet("{id}")]
  [Authorize]
  public async Task<ActionResult<BluRay>> GetBluRay(int id)
  {
    // Use below as example to query database, make separate class as a service (to be called by the controller) that is the only one that calls the database

    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      var bluRay = await _context.BluRays.FindAsync(id);

      string dbOwner = bluRay.Owner;
      string rqOwner = headers["owner"];

      if (bluRay == null || !Equals(dbOwner, rqOwner))
      {
        return NotFound();
      }
      return bluRay;
    }
    else
    {
      return BadRequest();
    }
  }

  // POST: api/blurays
  [HttpPost]
  [Authorize]
  public async Task<ActionResult<BluRay>> PostBluRay(BluRay bluRay)
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      _context.BluRays.Add(bluRay);
      await _context.SaveChangesAsync();

      return CreatedAtAction(nameof(GetBluRay), new { id = bluRay.Id }, bluRay);
    }
    else
    {
      return BadRequest();
    }
  }

  // PUT: api/blurays/5
  [HttpPut("{id}")]
  [Authorize]
  public async Task<IActionResult> PutBluRay(int id, BluRay bluRay)
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      if (id != bluRay.Id)
      {
        return BadRequest();
      }

      string dbOwner = bluRay.Owner;
      string rqOwner = headers["owner"];

      if (Equals(dbOwner, rqOwner))
      {
        _context.Entry(bluRay).State = EntityState.Modified;

        try
        {
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!BluRayExists(id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }
      }
      else
      {
        return BadRequest();
      }
    }
    return NoContent();
  }

  // DELETE: api/blurays/5
  [HttpDelete("{id}")]
  [Authorize]
  public async Task<IActionResult> DeleteBluRay(int id)
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      var bluRay = await _context.BluRays.FindAsync(id);

      string dbOwner = bluRay.Owner;
      string rqOwner = headers["owner"];

      if (bluRay == null || !Equals(dbOwner, rqOwner))
      {
        return BadRequest();
      }

      _context.BluRays.Remove(bluRay);
      await _context.SaveChangesAsync();

      return NoContent();
    }
    else
    {
      return BadRequest();
    }
  }

  [HttpGet("feed")]
  [Authorize]
  public async Task<ActionResult<IEnumerable<BluRay>>> GetBluRayFeed()
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      var foundBluRays = await _context.BluRays.ToListAsync();
      List<BluRay> returnedBluRays = new List<BluRay> { };

      for (int i = 0; i < foundBluRays.Count; i++)
      {
        returnedBluRays.Add(foundBluRays[i]);
      }

      return returnedBluRays;
    }
    else
    {
      return BadRequest();
    }

  }

  [HttpGet("feed/{id}")]
  [Authorize]
  public async Task<ActionResult<BluRay>> GetOtherBluRay(int id)
  {
    // Use below as example to query database, make separate class as a service (to be called by the controller) that is the only one that calls the database

    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      var bluRay = await _context.BluRays.FindAsync(id);

      if (bluRay == null)
      {
        return NotFound();
      }
      return bluRay;
    }
    else
    {
      return BadRequest();
    }
  }


  [HttpGet("user/{id}")]
  [Authorize]
  public async Task<ActionResult<IEnumerable<BluRay>>> GetUserBluRays(string id)
  {
    var request = Request;
    var headers = request.Headers;

    if (headers.ContainsKey("owner"))
    {
      //GetBluRays method, add parameter of string searchString to above method declaration- entity framework filtering
      var foundBluRays = await _context.BluRays.ToListAsync();
      List<BluRay> returnedBluRays = new List<BluRay> { };

      for (int i = 0; i < foundBluRays.Count; i++)
      {
        string email = foundBluRays[i].Email;
        if (Equals(email, id))
        {
          returnedBluRays.Add(foundBluRays[i]);
        }
      }

      return returnedBluRays;
    }
    else
    {
      return BadRequest();
    }

  }

  private bool BluRayExists(int id)
  {
    return _context.BluRays.Any(e => e.Id == id);
  }
}