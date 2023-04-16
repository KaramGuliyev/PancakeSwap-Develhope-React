import { Link } from "react-router-dom"

function CompetitionPage() {

    return (
        <>
        <div className="competition">
          <div class="ifo-body-top__pills">
          <div class="ifo-pill active">
            <Link>Latest</Link>
          </div>
          <div class="ifo-pill">
            <Link>Finished</Link>
          </div>

          </div>
          <div className="competition-top">
            <div className="competition-top_section"></div>
          </div>
        </div>
        
        </>
    )
}

export default CompetitionPage