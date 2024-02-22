import { useEffect } from 'react'
import { styles } from '../../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { imagesTask } from '../../assets'
import { taskManagerMov } from '../../assets'
import Carousel from '../Carousel'
import { Link } from 'react-router-dom'

export default function Project() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="" id="mainTaskManager">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <section className="min-h-screen">
          <div className="grid place-content-center items-center py-8">
            <motion.div variants={fadeIn('up', 'spring', 0.75)}>
              <h2 className={styles.sectionHeadText}>Task Manager</h2>
            </motion.div>
            <p className={styles.sectionSubTextVarTwo}>Motivation:</p>
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide my-4 text-left"
            >
              In the city of Vera Cruz RS every year there is a gymkhana between
              teams, which lasts 48 hours uninterrupted with tasks. Due to its
              intensity, there was a concern about controlling deadlines for
              delivery and execution of all tasks. With that in mind, the web
              system was created so that it can be installed inside the team's
              headquarters(HQ) and still have the possibility to follow up on
              the cell phone outside the headquarters(HQ).
            </motion.p>
            <p className={styles.sectionSubTextVarTwo}>Work:</p>
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide text-left my-4"
            >
              Assist in the organization and progress of tasks during the
              gymkhana. Provide all members with a visual way of tracking the
              progress of tasks.
            </motion.p>
            <p className={styles.sectionSubTextVarTwo}>Action:</p>
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide text-left my-4"
            >
              A web application was developed in the form of SPA (Single Page
              Application) where the backend is decoupled from the frontend.
              Using NodeJS + ReactJS, the server is hosted at Cyclic with
              redundancy at Heroku, the frontend is at Vercel with redundancy at
              Netlify. As we didn't need Search Engine Optimization (SEO) we
              chose to use ReactJS, knowing that if necessary in the future we
              can scale to the mobile version of React Native, as the routes are
              already ready.
              <p>
                For application security, CORS policies were implemented, route
                control protected through JWT token and access blocking by IP.
                To optimize the operation of the application, React Query was
                implemented for requests to the backend, and React Hook Form to
                reduce screen renderings and form controls.
              </p>
            </motion.p>
            <p className={styles.sectionSubTextVarTwo}>Result:</p>
            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] tracking-wide text-left my-4"
            >
              From the 26th to the 28th of May 2023, the project was put into
              practice. Which was installed in a projector inside the
              headquarters (HQ). Below we have the main screen of the system,
              which shows the official time and the two countdown timers.
              <p>
                For the center's timer, it performs a search among all the tasks
                launched, which will have the deadline closer to the official
                time, and next to it the name of the tasks corresponding to that
                search
              </p>
              <p>
                The timer on the right follows the same logic as the previous
                one, but analyzing when the next task will be delivered
              </p>
              <p>
                Tasks that still need to be resolved are in the center and can
                be changed colors as needed. When the task is completed it moves
                to the bottom in green.
              </p>
            </motion.p>
            <div className="max-w-[600px] h-[880px] w-full overflow-hidden justify-center justify-self-center duration-500 mx-auto py-4">
              <Carousel>
                {[
                  <video src={taskManagerMov} autoPlay muted loop />,
                  ...imagesTask.map((image) => (
                    <img
                      src={image}
                      alt="Images of the project task manager"
                      key={image}
                      className="rounded-2xl w-screen "
                    />
                  ))
                ]}
              </Carousel>
            </div>
            <Link
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              to="/"
            >
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
