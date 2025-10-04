import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, Calendar, DollarSign, Briefcase, Users, Filter, TrendingUp, Globe, Star } from 'lucide-react';

const RemoteJobBoard = () => {
  const mockJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Global",
      location: "Remote - Worldwide",
      category: "engineering",
      level: "senior",
      type: "fulltime",
      salary: "$120k - $150k",
      description: "Buscamos un desarrollador frontend senior con experiencia en React, TypeScript y diseño de sistemas escalables. Trabajarás en productos innovadores con impacto global.",
      tags: ["React", "TypeScript", "GraphQL", "Node.js"],
      postedDate: "Hace 2 días",
      featured: true
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub",
      location: "Remote - Americas",
      category: "design",
      level: "mid",
      type: "fulltime",
      salary: "$80k - $100k",
      description: "Únete a nuestro equipo de diseño para crear experiencias digitales excepcionales. Buscamos creatividad, atención al detalle y pasión por el diseño centrado en el usuario.",
      tags: ["Figma", "UX/UI", "Design Systems", "Prototyping"],
      postedDate: "Hace 5 días",
      featured: false
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Remote - Europe",
      category: "engineering",
      level: "senior",
      type: "fulltime",
      salary: "$110k - $140k",
      description: "Buscamos un ingeniero DevOps para mantener y mejorar nuestra infraestructura cloud. Experiencia con AWS, Kubernetes y CI/CD es esencial.",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform"],
      postedDate: "Hace 1 día",
      featured: true
    },
    {
      id: 4,
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "Remote - US Timezone",
      category: "marketing",
      level: "mid",
      type: "fulltime",
      salary: "$70k - $90k",
      description: "Lidera nuestras estrategias de marketing digital y crecimiento. Buscamos experiencia en growth hacking, SEO/SEM y marketing de contenidos.",
      tags: ["SEO", "Content Marketing", "Analytics", "Growth"],
      postedDate: "Hace 3 días",
      featured: false
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote - Anywhere",
      category: "engineering",
      level: "mid",
      type: "fulltime",
      salary: "$90k - $120k",
      description: "Únete a nuestra startup en crecimiento. Trabajarás en toda la pila tecnológica, desde el frontend hasta la base de datos.",
      tags: ["Python", "React", "PostgreSQL", "AWS"],
      postedDate: "Hace 6 días",
      featured: false
    },
    {
      id: 6,
      title: "Customer Success Manager",
      company: "SaaSCo",
      location: "Remote - EMEA",
      category: "support",
      level: "mid",
      type: "fulltime",
      salary: "$60k - $80k",
      description: "Ayuda a nuestros clientes a tener éxito con nuestra plataforma. Buscamos excelentes habilidades de comunicación y orientación al cliente.",
      tags: ["Customer Service", "SaaS", "Communication", "Problem Solving"],
      postedDate: "Hace 4 días",
      featured: false
    },
    {
      id: 7,
      title: "Junior Data Analyst",
      company: "DataDriven Inc",
      location: "Remote - Worldwide",
      category: "engineering",
      level: "junior",
      type: "fulltime",
      salary: "$50k - $70k",
      description: "Comienza tu carrera en análisis de datos con nosotros. Trabajarás con grandes conjuntos de datos y ayudarás a generar insights valiosos.",
      tags: ["SQL", "Python", "Excel", "Tableau"],
      postedDate: "Hace 1 día",
      featured: false
    },
    {
      id: 8,
      title: "Freelance Content Writer",
      company: "ContentCreators",
      location: "Remote - Anywhere",
      category: "marketing",
      level: "mid",
      type: "freelance",
      salary: "$40 - $60/hour",
      description: "Buscamos escritores freelance para crear contenido técnico de alta calidad. Flexibilidad total de horarios.",
      tags: ["Writing", "SEO", "Technical Writing", "Research"],
      postedDate: "Hace 7 días",
      featured: false
    },
    {
      id: 9,
      title: "Mobile Developer",
      company: "AppMakers",
      location: "Remote - Global",
      category: "engineering",
      level: "senior",
      type: "fulltime",
      salary: "$100k - $130k",
      description: "Desarrolla aplicaciones móviles innovadoras para millones de usuarios. Experiencia en React Native o Flutter requerida.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      postedDate: "Hace 2 días",
      featured: true
    },
    {
      id: 10,
      title: "Sales Representative",
      company: "SalesForce Pro",
      location: "Remote - Americas",
      category: "sales",
      level: "junior",
      type: "fulltime",
      salary: "$45k - $65k + Commission",
      description: "Únete a nuestro equipo de ventas dinámico. Ofrecemos excelentes comisiones y oportunidades de crecimiento.",
      tags: ["B2B Sales", "CRM", "Cold Calling", "Negotiation"],
      postedDate: "Hace 5 días",
      featured: false
    }
  ];

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Simulate API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setJobs(mockJobs);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = categoryFilter === '' || job.category === categoryFilter;
      const matchesLevel = levelFilter === '' || job.level === levelFilter;
      const matchesType = typeFilter === '' || job.type === typeFilter;

      return matchesSearch && matchesCategory && matchesLevel && matchesType;
    });
  }, [jobs, searchTerm, categoryFilter, levelFilter, typeFilter]);

  // Calculate stats
  const stats = useMemo(() => {
    const uniqueCompanies = new Set(jobs.map(job => job.company));
    return {
      totalJobs: jobs.length,
      companies: uniqueCompanies.size,
      featuredJobs: jobs.filter(job => job.featured).length
    };
  }, [jobs]);

  const handleApply = (e, job) => {
    e.stopPropagation();
    alert(`¡Aplicación enviada para: ${job.title} en ${job.company}!\n\nEn una aplicación real, esto te llevaría al formulario de aplicación.`);
  };

  const JobCard = ({ job }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {job.featured && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3" />
              Destacado
            </div>
          </div>
        )}
        
        <div className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
          isHovered ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20' : 'border-gray-700'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {job.title}
              </h3>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.company}
                </span>
                <span className="text-gray-400 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-4 line-clamp-2">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-xs text-indigo-300 hover:bg-indigo-500/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {job.postedDate}
              </div>
            </div>
            <button
              onClick={(e) => handleApply(e, job)}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transform transition-all hover:scale-105 hover:shadow-lg"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gray-900/50 backdrop-blur-md border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">
                Remote<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Hub</span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.totalJobs}</div>
                <div className="text-xs text-gray-400">Vacantes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.companies}</div>
                <div className="text-xs text-gray-400">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{stats.featuredJobs}</div>
                <div className="text-xs text-gray-400">Destacados</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título, empresa o habilidades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filtros
              {(categoryFilter || levelFilter || typeFilter) && (
                <span className="ml-2 px-2 py-0.5 bg-indigo-500 rounded-full text-xs">
                  {[categoryFilter, levelFilter, typeFilter].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>

          {/* Collapsible Filters */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300 ${
            showFilters ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">Todas las categorías</option>
              <option value="engineering">Ingeniería</option>
              <option value="design">Diseño</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Ventas</option>
              <option value="support">Soporte</option>
            </select>

            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">Todos los niveles</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-Level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="">Tipo de empleo</option>
              <option value="fulltime">Tiempo Completo</option>
              <option value="parttime">Medio Tiempo</option>
              <option value="contract">Contrato</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Cargando vacantes...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No se encontraron vacantes</h3>
            <p className="text-gray-400">Intenta ajustar tus filtros o términos de búsqueda</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoteJobBoard;