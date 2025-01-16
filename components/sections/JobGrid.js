import Link from "next/link";

const JobGrid = ({ jobs, filters }) => {
    const { keyword, location } = filters;
  
    // Filter jobs based on search inputs
    const filteredJobs = jobs.filter((job) => {
      const matchesKeyword =
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase());
      const matchesLocation =
        job.location.toLowerCase().includes(location.toLowerCase());
  
      return matchesKeyword && matchesLocation;
    });
  
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="lawprovide-boaxrea jobsss margin-b30" key={job.id}>
                    <div className="guidiance-boxarea">
                        <img src="/assets/images/icons/group8.svg" alt="" className="ts" />
                    </div>
                    <div className="lax-conultingprovide">
                        <Link href="/servicemiddle" className="color-29">
                            <h3 className="font-lora font-20 lineh-26 weight-600 color-29 margin-b14 ts">{job.title}</h3>
                        </Link>
                        <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">{job.description}</p>
                        <div className="missiontextarea">
                        <ul>
                            <li className="font-ks font-16 lineh-16 weight-500 color-17 margin-b20">
                                <span>
                                    <img src="/assets/images/icons/check1.png" alt="" />
                                </span>Location - {job.location}
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
          ))
        ) : (
          <p>No jobs match your search criteria.</p>
        )}
      </div>
    );
  };
  
  export default JobGrid;
  