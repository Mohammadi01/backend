using System.Security.Cryptography.X509Certificates;
using Application.Models;

using Persistence.Entities;
using Persistence.Repositories;

namespace Application.Services;



public class EventService(IEventRepository eventRepository) : IEventService
{
    private readonly IEventRepository _eventRepository = eventRepository;
    public async Task<EventResult> CreateEventAsync(CreateEventRequest request)
    {
        try
        {
            var eventEntity = new EventEntity
            {
                Image = request.Image,
                Title = request.Title,
                Description = request.Description,
                Location = request.Location,
                EventDate = request.EventDate,
            };
            var result = await _eventRepository.AddAsync(eventEntity);
            return result.Success
                ? new EventResult { Success = true }
                : new EventResult { Success = false, Error = result.Error };
        }
        catch (Exception ex)
        {
            return new EventResult
            {
                Success = false,
                Error = ex.Message
            };
        }

    }
    public async Task<EventResult<IEnumerable<Event>>> GetEventsAsync()
    {
        try
        {
            var result = await _eventRepository.GetAllAsync();
            var events = result.Result?.Select(e => new Event
            {
                Image = e.Image,
                Title = e.Title,
                EventDate = e.EventDate,
                Description = e.Description,
                Location = e.Location,
            });

            return new EventResult<IEnumerable<Event>> { Success = true, Result = events };

        }
        catch (Exception ex)
        {
            return new EventResult<IEnumerable<Event>>
            {
                Success = false,
                Error = ex.Message
            };
        }
    }





    public async Task<EventResult<Event?>> GetEventAsync(string eventId)
    {

        var result = await _eventRepository.GetAsync(x => x.Id == eventId);
        if (result.Success && result.Result != null)
        {

            var eventModel = new Event
            {
                Id = result.Result.Id,
                Image = result.Result.Image,
                Title = result.Result.Title,
                EventDate = result.Result.EventDate,
                Description = result.Result.Description,
                Location = result.Result.Location
            };
            return new EventResult<Event?> { Success = true, Result = eventModel };

        }

        return new EventResult<Event?> { Success = false, Error = result.Error };


    }
}