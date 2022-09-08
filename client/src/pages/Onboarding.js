import { useState } from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    show_cloud: true,
    company: '',
    environment: '',
    cloud_interest: '',
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const handleSubmit = () => {
    console.log('submitted')
  }

  const handleChange = (e) => {
    // console.log('e', e)
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  return (
    <>
      <Nav
      minimal={true}
      setShowModal={() => {}}
      showModal={false}
      />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Window Shopping?</label>
            <div className="multiple-input-container">
            <input
              id="show_cloud_yes"
              type="radio"
              name="show_cloud"
              value="Yes"
              onChange={handleChange}
              checked={formData.show_cloud === 'Yes'}
            />
            <label htmlFor="show_cloud_yes">Yes</label>
            <input
              id="show_cloud_no"
              type="radio"
              name="show_cloud"
              value="No"
              onChange={handleChange}
              checked={formData.show_cloud === 'No'}
            />
            <label htmlFor="show_cloud_no">No</label>
            </div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company"
              required={true}
              value={formData.company}
              onChange={handleChange}
            />
            <label htmlFor="environment">Cloud Environment</label>
            <div className="multiple-input-container">
            <input
              id="environment"
              type="text"
              name="environment"
              placeholder="AWS, Alibaba, etc."
              required={true}
              value={formData.environment}
              onChange={handleChange}
            />
            </div>
            <label>Show Me:</label>
            <div className="multiple-input-container">
            <input
              id="cloud_interest_cspm"
              type="radio"
              name="cloud_interest"
              value="cspm"
              onChange={handleChange}
              checked={formData.cloud_interest === 'cspm'}
            />
            <label htmlFor="cloud_interest_cspm">CSPM</label>
            <input
              id="cloud_interest_cnapp"
              type="radio"
              name="cloud_interest"
              value="cnapp"
              onChange={handleChange}
              checked={formData.cloud_interest === 'cnapp'}
            />
            <label htmlFor="cloud_interest_cnapp">CNAPP</label>
            <input
              id="cloud_interest_ciem"
              type="radio"
              name="cloud_interest"
              value="ciem"
              onChange={handleChange}
              checked={formData.cloud_interest === 'ciem'}
            />
            <label htmlFor="cloud_interest_ciem">CIEM</label>
            <input
              id="cloud_interest_cdr"
              type="radio"
              name="cloud_interest"
              value="cdr"
              onChange={handleChange}
              checked={formData.cloud_interest === 'cdr'}
            />
            <label htmlFor="cloud_interest_cdr">CDR</label>
            </div>

            <label htmlFor="about">About Us</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="Small security team, looking for cloud workload protection and a cspm tool"
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit"/>
          </section>

          <section>
            <label htmlFor="url">Champion Photo</label>
              <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                required={true}
                />
              <div className="photo-container">
                <img src={formData.url} alt="picture of champion or company logo"/>
              </div>
          </section>
        </form>

      </div>

    </>

  )
}

export default Onboarding
