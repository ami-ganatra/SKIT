using Microsoft.AspNetCore.Mvc;
using SKIT.Models;
using SKIT.services;
using SKIT.ViewModel;
using System.Diagnostics;

namespace SKIT.Controllers
{
    public class HomeController : Controller
    {
        private readonly CompApiService _compapiservice;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, CompApiService compapiservice)
        {
            _logger = logger;
            _compapiservice = compapiservice;
        }

        public async Task<IActionResult> Index()
        {
            var semesters = await _compapiservice.GetAllSemestersAsync();
            var subjects = await _compapiservice.GetSubjectsBySemesterAsync();
            var viewModel = new ComputerViewModel
            {
                Semesters = semesters,
                Subjects = subjects
            };

            return View(viewModel);
        }
        public async Task<IActionResult> GetDocuments(int id)
        {
            var doc = await _compapiservice.GetDocument(id);
            if (doc == null)
            {
                Console.WriteLine("doc is null");
                return NotFound("Documents not found.");
            }
            return PartialView("_DocumentListPartial", doc); // assuming partial view
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}