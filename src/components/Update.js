import React from 'react';

const Update = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="border bg-secondary p-4 rounded" style={{ width: '50%' }}>
        <h3 className="text-white mb-4 text-center">Update User</h3>
        <form>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
