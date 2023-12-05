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
  public async Task<ActionResult<IEnumerable<BluRay>>> GetBluRays(string searchString)
  {
    //GetBluRays method, parameter of searchString- entity framework filtering
    return await _context.BluRays.ToListAsync();
  }

  // GET: api/blurays/5
  [HttpGet("{id}")]
  public async Task<ActionResult<BluRay>> GetBluRay(int id)
  {
    // Use below as example to query database, make separate class as a service (to be called by the controller) that is the only one that calls the database
    var bluRay = await _context.BluRays.Where(bluRay => bluRay.Id == id);

    if (bluRay == null)
    {
      return NotFound();
    }

    return bluRay;
  }

  // POST: api/blurays
  [HttpPost]
  public async Task<ActionResult<BluRay>> PostBluRay(BluRay bluRay)
  {
    _context.BluRays.Add(bluRay);
    await _context.SaveChangesAsync();

    return CreatedAtAction(nameof(GetBluRay), new { id = bluRay.Id }, bluRay);
  }

  // PUT: api/blurays/5
  [HttpPut("{id}")]
  public async Task<IActionResult> PutBluRay(int id, BluRay bluRay)
  {
    if (id != bluRay.Id)
    {
      return BadRequest();
    }

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

    return NoContent();
  }

  // DELETE: api/blurays/5
  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteBluRay(int id)
  {
    var bluRay = await _context.BluRays.FindAsync(id);
    if (bluRay == null)
    {
      return NotFound();
    }

    _context.BluRays.Remove(bluRay);
    await _context.SaveChangesAsync();

    return NoContent();
  }

  private bool BluRayExists(int id)
  {
    return _context.BluRays.Any(e => e.Id == id);
  }

  // dummy method to test the connection
  [HttpGet("hello")]
  public string Test()
  {
    return "Hello World!";
  }

  [HttpGet("private")]
  [Authorize]
  public IActionResult Private()
  {
    return Ok(new
    {
      Message = "Hello from a private endpoint! You need to be authenticated to see this."
    });
  }
}
// Dummy comment