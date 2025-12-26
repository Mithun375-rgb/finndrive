import { Search, ArrowRight, Clock, MapPin, Award, Filter, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const featuredScholarships = [
  {
    title: "National Merit Scholarship",
    provider: "Government of India",
    amount: "₹50,000/year",
    deadline: "March 2025",
    location: "All India",
    field: "All Streams",
  },
  {
    title: "STEM Excellence Award",
    provider: "Tech Foundation",
    amount: "₹1,00,000",
    deadline: "April 2025",
    location: "Pan India",
    field: "Engineering & Science",
  },
  {
    title: "Women in Business Grant",
    provider: "WomenFirst NGO",
    amount: "₹75,000",
    deadline: "February 2025",
    location: "Metro Cities",
    field: "Business & Commerce",
  },
];

const ageOptions = [
  "15-18 years",
  "19-22 years",
  "23-27 years",
  "28-32 years",
  "33-37 years",
  "38-42 years",
  "43-47 years",
  "48-50 years",
];

const fieldOptions = [
  "Student",
  "Private Employee",
  "Government Employee",
  "Self-Employed",
  "Business Owner",
  "Freelancer",
  "Doctor",
  "Engineer",
  "Teacher/Professor",
  "Lawyer",
  "Chartered Accountant",
  "Farmer",
  "Artist/Creative Professional",
  "Healthcare Worker",
  "IT Professional",
  "Bank Employee",
  "Defence Personnel",
  "Research Scholar",
  "Homemaker",
  "Retired",
];

const locationOptions = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Bhopal",
  "Indore",
  "Nagpur",
  "Coimbatore",
  "Kochi",
  "Visakhapatnam",
  "Patna",
  "Guwahati",
  "Thiruvananthapuram",
];

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
  searchPlaceholder: string;
}

function FilterSection({ title, options, selectedValue, onSelect, searchPlaceholder }: FilterSectionProps) {
  const [search, setSearch] = useState("");
  
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-3">
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-9 pl-9 pr-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="max-h-48 overflow-y-auto space-y-1">
        {filteredOptions.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors ${
              selectedValue === option
                ? "bg-primary/10 text-primary"
                : "hover:bg-muted text-foreground"
            }`}
          >
            <span>{option}</span>
            {selectedValue === option && (
              <Check className="w-4 h-4 text-green-500" />
            )}
          </button>
        ))}
        {filteredOptions.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-2">No results found</p>
        )}
      </div>
    </div>
  );
}

export function ScholarshipSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState<"age" | "field" | "location">("age");
  
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const filterTabs = [
    { id: "age" as const, label: "Age", selected: selectedAge },
    { id: "field" as const, label: "Field", selected: selectedField },
    { id: "location" as const, label: "Location", selected: selectedLocation },
  ];

  return (
    <section id="scholarships" className="py-24 bg-gradient-dark relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Scholarship Spotlight</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-gradient-gold">Perfect Scholarship</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover thousands of scholarships tailored to your age, field, and location.
          </p>
        </div>

        {/* Search Bar with Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            
            {/* Filter Button */}
            <Popover open={filterOpen} onOpenChange={setFilterOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="h-14 px-4 gap-2 border-border bg-card hover:bg-muted"
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden sm:inline">Filter</span>
                  {(selectedAge || selectedField || selectedLocation) && (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                      {[selectedAge, selectedField, selectedLocation].filter(Boolean).length}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 bg-card border-border" align="end">
                {/* Filter Tabs */}
                <div className="flex border-b border-border">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilterTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-3 text-sm font-medium transition-colors ${
                        activeFilterTab === tab.id
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.selected ? (
                        <>
                          <span className="truncate max-w-[60px]">{tab.selected.split(" ")[0]}</span>
                          <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        </>
                      ) : (
                        tab.label
                      )}
                    </button>
                  ))}
                </div>

                {/* Filter Content */}
                {activeFilterTab === "age" && (
                  <FilterSection
                    title="Age"
                    options={ageOptions}
                    selectedValue={selectedAge}
                    onSelect={setSelectedAge}
                    searchPlaceholder="Search age range..."
                  />
                )}
                {activeFilterTab === "field" && (
                  <FilterSection
                    title="Field"
                    options={fieldOptions}
                    selectedValue={selectedField}
                    onSelect={setSelectedField}
                    searchPlaceholder="Search occupation..."
                  />
                )}
                {activeFilterTab === "location" && (
                  <FilterSection
                    title="Location"
                    options={locationOptions}
                    selectedValue={selectedLocation}
                    onSelect={setSelectedLocation}
                    searchPlaceholder="Search city..."
                  />
                )}

                {/* Clear Filters */}
                {(selectedAge || selectedField || selectedLocation) && (
                  <div className="p-3 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setSelectedAge(null);
                        setSelectedField(null);
                        setSelectedLocation(null);
                      }}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </PopoverContent>
            </Popover>

            <Button variant="hero" className="h-14">
              Search
            </Button>
          </div>

          {/* Selected Filters Display */}
          {(selectedAge || selectedField || selectedLocation) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedAge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  {selectedAge}
                </span>
              )}
              {selectedField && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  {selectedField}
                </span>
              )}
              {selectedLocation && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  {selectedLocation}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Featured Scholarships */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredScholarships.map((scholarship, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated vintage-border"
            >
              {/* Amount Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-semibold text-primary">{scholarship.amount}</span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 pr-24 group-hover:text-primary transition-colors">
                {scholarship.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{scholarship.provider}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{scholarship.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {scholarship.field}
                </span>
                <Button variant="ghost" size="sm" className="group/btn">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            View All Scholarships
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
