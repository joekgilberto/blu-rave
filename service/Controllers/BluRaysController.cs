using Data;
using Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace csharp_crud_api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class BluRaysController : ControllerBase
{
  private readonly BluRayContext _context;

  public BluRaysController(BluRayContext context)
  {
    _context = context;
  }

  // GET: api/blurays
  [HttpGet]
  public async Task<ActionResult<IEnumerable<BluRay>>> GetBluRays()
  {
    return await _context.BluRays.ToListAsync();
  }

  // GET: api/blurays/5
  [HttpGet("{id}")]
  public async Task<ActionResult<BluRay>> GetBluRay(int id)
  {
    var bluRay = await _context.BluRays.FindAsync(id);

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
}