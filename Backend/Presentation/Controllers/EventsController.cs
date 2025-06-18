using Microsoft.AspNetCore.Mvc;

using Application.Services;

using Application.Models;

namespace Presentation.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EventsController(IEventService eventService) : ControllerBase
{
    private readonly IEventService _eventService = eventService;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var events = await _eventService.GetEventsAsync();
        return Ok(events);

    }

    [HttpGet("{eventId}")]
    public async Task<IActionResult> Get(string eventId)
    {
        var result = await _eventService.GetEventAsync(eventId);
        if (result.Success)
        {
            return Ok(result.Result);
        }
        return NotFound(result.Error);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateEventRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var result = await _eventService.CreateEventAsync(request);
        return result.Success ? Ok() : StatusCode(500, result.Error);
    }
}