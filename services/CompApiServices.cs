﻿using SKIT.Constant;
using SKIT.Data.Dtos;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace SKIT.services
{
    public class CompApiService
    {
        private readonly HttpClient _httpClient;
        public CompApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<IEnumerable<SubjectDto>> GetSubjectsBySemesterAsync()
        {
            string url = string.Format(ApiConstant.BaseUrl + ApiConstant.GetSubject);
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            };

            var subjects = await response.Content.ReadFromJsonAsync<IEnumerable<SubjectDto>>(options);
            return subjects;
        }
        public async Task<IEnumerable<SemesterDto>> GetAllSemestersAsync()
        {
            string url = ApiConstant.BaseUrl + ApiConstant.GetSem;
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            };

            var semesters = await response.Content.ReadFromJsonAsync<IEnumerable<SemesterDto>>(options);
            return semesters;
        }
        public async Task<IEnumerable<DocumentDto>> GetDocument(int Id)
        {
            string url = ApiConstant.BaseUrl + ApiConstant.GetDoc + Id;
            HttpResponseMessage response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            };

            var document = await response.Content.ReadFromJsonAsync<IEnumerable<DocumentDto>>(options);
            return document;
        }
    }
}