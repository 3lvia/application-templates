using Duende.Bff;
using Microsoft.AspNetCore.Mvc;

namespace {{cookiecutter.application_name_pascal_case}};

[BffApi]
[Route("/bff")]
public class HelloController : Controller
{
    /// <summary>
    /// Docs here
    /// </summary>
    /// <response code="200">Docs here</response>
    [HttpGet("hello")]
    // [AllowAnonymous]
    public ActionResult<string> GetString(CancellationToken cancellationToken)
    {
        return Ok("hello, world!");
    }
}