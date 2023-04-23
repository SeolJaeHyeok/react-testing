export const Application = () => {
  return (
    <>
      <h1>Job Application</h1>
      <h2>Section 1</h2>
      <p>getByText test</p>
      <span title="milkboy2564"></span>
      <div data-testid="testId">Test Id</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            alt="name"
            type="text"
            id="name"
            placeholder="Write your correct name"
            value="milkboy2564"
            onChange={() => {}} // Test 통과를 위한 임시 함수 선언
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            Agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
