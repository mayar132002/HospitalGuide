//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Practical_Training_View.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Care_Units
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Care_Units()
        {
            this.patients = new HashSet<patient>();
        }
    
        public int Care_ID { get; set; }
        public string Care_Name { get; set; }
        public int Care_NumberOfemptybed { get; set; }
        public int Care_NumberOfbed { get; set; }
        public string Care_Info { get; set; }
        public string Care_Description { get; set; }
        public int Care_Numberofemployees { get; set; }
        public int Admin_ID { get; set; }
    
        public virtual Admin Admin { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<patient> patients { get; set; }
    }
}