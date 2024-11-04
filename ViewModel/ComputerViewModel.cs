using System.Collections.Generic;
using System.Linq;
using SKIT.Data.Dtos;

namespace SKIT.ViewModel
{
    public class ComputerViewModel
    {
        public IEnumerable<SemesterDto> Semesters { get; set; }
        public IEnumerable<SubjectDto> Subjects { get; set; }
        public IEnumerable<DocumentDto> Documents { get; set; }

        public IDictionary<int, IEnumerable<SubjectDto>> SubjectsBySemester =>
            Subjects.GroupBy(s => s.SemesterId)
                    .ToDictionary(g => g.Key, g => g.AsEnumerable());
    }
}
