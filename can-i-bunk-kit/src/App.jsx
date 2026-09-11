// The top of the app. Right now it just stacks the components.
// Over the stages this is where your state (useState) and
// effects (useEffect) will live, and it passes data down as props.

import Header from './components/Header'
import Summary from './components/Summary'
import AddCourseForm from './components/AddCourseForm'
import FilterTabs from './components/FilterTabs'
import CourseList from './components/CourseList'
import Footer from './components/Footer'

function App() {
  // TODO Stage 3: courses state (start with sampleCourses from ./data/sampleCourses)
  // TODO Stage 4: addCourse, deleteCourse, markClass functions
  // TODO Stage 5: filter state + visibleCourses
  // TODO Stage 6: threshold state
  // TODO Stage 7: useEffect -> save to localStorage, update document.title

  return (
    <div className="app">
      <Header />

      <main>
        <Summary />

        <div className="layout">
          <AddCourseForm />

          <section className="courses-section">
            <FilterTabs />
            <CourseList />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
