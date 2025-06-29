import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppLayout from "../components/layout/AppLayout";
import { userSchema } from "../validator/userSchema";
import { useCreateUser } from "../hooks/useUsers";

function AddUser({ handleUpdate, pageTitle, userData, isPending }) {
  const createMutation = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: userData
      ? userData
      : {
          fullName: "",
          age: "",
          email: "",
          phone: "",
          isActive: false,
          gender: "",
          address: {
            zip: "",
            city: "",
            state: "",
            street: "",
            country: "",
          },
          preferences: {
            darkMode: false,
            language: "english",
            newsletterSubscribed: false,
          },
          hobbies: [],
          education: [
            {
              year: "",
              degree: "",
              stream: "",
              institute: "",
            },
          ],
          socialProfiles: {
            github: "https://github.com/VivekSingh649",
            twitter: "https://x.com/VivekSi52628952",
            linkedIn: "https://www.linkedin.com/in/vivek-singh-299651245",
          },
        },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: hobbyFields,
    append: appendHobby,
    remove: removeHobby,
  } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit = async (data) => {
    if (handleUpdate) {
      handleUpdate(data);
    } else {
      await createMutation.mutateAsync(data);
    }
  };

  const breadcrumbs = [
    { label: "Dashboard", link: "/" },
    { label: pageTitle ? "Update User" : "Add New User", link: null },
  ];

  const headerActions = (
    <button
      type="submit"
      form="addUserForm"
      className="flex items-center px-4 py-2 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all cursor-pointer"
      onClick={onSubmit}
    >
      <i className="fas fa-plus mr-2 text-xs"></i>
      <span className="font-medium">
        {pageTitle ? "Update User" : "Create User"}
      </span>
    </button>
  );

  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return <span className="text-red-500 text-sm mt-1">{error.message}</span>;
  };

  return (
    <AppLayout
      title={pageTitle ? pageTitle : "Add New User"}
      breadcrumbs={breadcrumbs}
      actions={headerActions}
    >
      <>
        {/* Form content */}
        <section className="px-8 py-6">
          <form
            id="addUserForm"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Personal Information */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-user text-primary-500 mr-2" />
                  Personal Information
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-0">
                  {/* First Name */}
                  <div className="form-control">
                    <label htmlFor="fullName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className={`form-input ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                      placeholder="Enter first name"
                      {...register("fullName")}
                    />
                    <ErrorMessage error={errors.fullName} />
                  </div>

                  {/* Email */}
                  <div className="form-control">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-input ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Enter email address"
                      {...register("email")}
                    />
                    <ErrorMessage error={errors.email} />
                  </div>

                  {/* Phone */}
                  <div className="form-control">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`form-input ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="Enter phone number"
                      {...register("phone")}
                    />
                    <ErrorMessage error={errors.phone} />
                  </div>

                  {/* Age */}
                  <div className="form-control">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      className={`form-input ${
                        errors.age ? "border-red-500" : ""
                      }`}
                      placeholder="Enter age"
                      {...register("age")}
                    />
                    <ErrorMessage error={errors.age} />
                  </div>

                  <div className="form-control">
                    <label className="form-label">Gender</label>
                    <ul className="form-radio-group">
                      {["male", "female", "other"].map((val, idx) => (
                        <li key={val} className="form-radio-item">
                          <div className="flex items-center h-5">
                            <input
                              id={`gender-${val}`}
                              name="gender"
                              type="radio"
                              value={val}
                              className={`form-radio-input ${
                                errors.gender ? "border-red-500" : ""
                              }`}
                              {...register("gender")}
                            />
                          </div>
                          <label
                            htmlFor={`gender-${val}`}
                            className="ms-3 block text-sm text-gray-600 capitalize"
                          >
                            {val}
                          </label>
                        </li>
                      ))}
                    </ul>
                    <ErrorMessage error={errors.gender} />
                  </div>

                  <div className="form-control">
                    <label className="form-label">Status</label>
                    <div className="flex items-center mt-2">
                      <label className="toggle-switch">
                        <input type="checkbox" {...register("isActive")} />
                        <span className="toggle-slider" />
                      </label>
                      <span className="ml-3 text-sm text-slate-600">
                        Enable user active
                      </span>
                    </div>
                    <ErrorMessage error={errors.isActive} />
                  </div>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-map-marker-alt text-primary-500 mr-2" />
                  Address
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-0">
                  <div className="form-control">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className={`form-input ${
                        errors.city ? "border-red-500" : ""
                      }`}
                      placeholder="Enter city"
                      {...register("address.city")}
                    />
                    <ErrorMessage error={errors.address?.city} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="state" className="form-label">
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      className={`form-input ${
                        errors.address?.state ? "border-red-500" : ""
                      }`}
                      placeholder="Enter state/province"
                      {...register("address.state")}
                    />
                    <ErrorMessage error={errors.state} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="zip" className="form-label">
                      ZIP/Postal Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className={`form-input ${
                        errors.zip ? "border-red-500" : ""
                      }`}
                      placeholder="Enter ZIP/postal code"
                      {...register("address.zip")}
                    />
                    <ErrorMessage error={errors.address?.zip} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select
                      id="country"
                      className={`form-input ${
                        errors.address?.country ? "border-red-500" : ""
                      }`}
                      {...register("address.country")}
                    >
                      <option value="" disabled>
                        Select country
                      </option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="country">Country</option>
                      <option value="other">Other</option>
                    </select>
                    <ErrorMessage error={errors.address?.country} />
                  </div>
                  <div className="md:col-span-2 form-control">
                    <label htmlFor="street" className="form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="street"
                      className={`form-input ${
                        errors.address?.street ? "border-red-500" : ""
                      }`}
                      placeholder="Enter street address"
                      {...register("address.street")}
                    />
                    <ErrorMessage error={errors.address?.street} />
                  </div>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-graduation-cap text-primary-500 mr-2" />
                  Education
                </h3>
              </div>
              <div className="p-6">
                <div id="educationContainer">
                  {educationFields.map((field, index) => (
                    <div
                      className="education-item mb-6 p-5 bg-slate-50/50 rounded-xl border border-slate-100"
                      key={field.id}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Education #{index + 1}</h4>
                        {index > 0 && (
                          <button
                            type="button"
                            className="text-danger-500 hover:text-danger-600 education-remove cursor-pointer"
                            onClick={() => removeEducation(index)}
                          >
                            <i className="fas fa-trash" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-0">
                        <div className="form-control">
                          <label className="form-label">Degree</label>
                          <input
                            type="text"
                            className={`form-input ${
                              errors.education?.[index]?.degree
                                ? "border-red-500"
                                : ""
                            }`}
                            placeholder="Enter degree"
                            {...register(`education.${index}.degree`)}
                          />
                          <ErrorMessage
                            error={errors.education?.[index]?.degree}
                          />
                        </div>
                        <div className="form-control">
                          <label className="form-label">Stream</label>
                          <input
                            type="text"
                            className={`form-input ${
                              errors.education?.[index]?.stream
                                ? "border-red-500"
                                : ""
                            }`}
                            placeholder="Enter institution"
                            {...register(`education.${index}.stream`)}
                          />
                          <ErrorMessage
                            error={errors.education?.[index]?.stream}
                          />
                        </div>
                        <div className="form-control">
                          <label className="form-label">Year</label>
                          <input
                            type="number"
                            className={`form-input ${
                              errors.education?.[index]?.year
                                ? "border-red-500"
                                : ""
                            }`}
                            placeholder="Enter year"
                            {...register(`education.${index}.year`)}
                          />
                          <ErrorMessage
                            error={errors.education?.[index]?.year}
                          />
                        </div>
                        <div className="form-control">
                          <label className="form-label">Institute</label>
                          <input
                            type="text"
                            className={`form-input ${
                              errors.education?.[index]?.institute
                                ? "border-red-500"
                                : ""
                            }`}
                            placeholder="Enter description"
                            {...register(`education.${index}.institute`)}
                          />
                          <ErrorMessage
                            error={errors.education?.[index]?.institute}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  id="addEducation"
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  onClick={() =>
                    appendEducation({
                      degree: "",
                      stream: "",
                      year: "",
                      institute: "",
                    })
                  }
                >
                  <i className="fas fa-plus-circle mr-2" />
                  Add Education
                </button>
              </div>
            </div>
            {/* Hobbies & Interests */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-heart text-primary-500 mr-2" />
                  Hobbies &amp; Interests
                </h3>
              </div>
              <div className="p-6">
                <div id="hobbiesContainer">
                  {/* Hobby Item 1 */}
                  <div className="flex items-end gap-2">
                    <div className="form-control w-4/5">
                      <label htmlFor="hobby-input" className="form-label">
                        Hobbies
                      </label>
                      <input
                        type="text"
                        id="hobby-input"
                        className="form-input"
                        placeholder="Enter hobby or interest"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const value = e.target.value.trim();
                            if (value) {
                              appendHobby(value);
                              e.target.value = "";
                            }
                          }
                        }}
                      />
                      <ErrorMessage error={errors?.hobbies} />
                    </div>
                    <button
                      type="button"
                      id="addHobby"
                      className="flex items-center px-4 py-2 mb-4 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all cursor-pointer"
                      onClick={() => {
                        const input = document.getElementById("hobby-input");
                        const value = input.value.trim();
                        if (value) {
                          appendHobby(value);
                          input.value = "";
                        }
                      }}
                    >
                      <i className="fas fa-plus-circle mr-2" />
                      Add Hobby
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hobbyFields.map((field, index) => (
                      <span
                        key={field.id}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-light text-primary-700"
                      >
                        <i
                          className="fas fa-x mr-2 text-red-500 cursor-pointer"
                          onClick={() => removeHobby(index)}
                        />
                        <input
                          type="text"
                          {...register(`hobbies.${index}`)}
                          className="bg-transparent outline-none"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Preferences */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-sliders text-primary-500 mr-2" />
                  Preferences
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label htmlFor="language" className="form-label">
                      Language
                    </label>
                    <select
                      id="language"
                      className={`form-input ${
                        errors.preferences?.language ? "border-red-500" : ""
                      }`}
                      {...register("preferences.language")}
                    >
                      <option defaultValue disabled>
                        Select language
                      </option>
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                    </select>
                    <ErrorMessage error={errors.preferences?.language} />
                  </div>
                  <div className="form-control">
                    <label className="form-label">Newsletter</label>
                    <div className="flex items-center mt-2">
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          {...register("preferences.newsletterSubscribed")}
                        />
                        <span className="toggle-slider" />
                      </label>
                      <span className="ml-3 text-sm text-slate-600">
                        Subscribe to newsletter
                      </span>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="form-label">Dark Mode</label>
                    <div className="flex items-center mt-2">
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          {...register("preferences.darkMode")}
                        />
                        <span className="toggle-slider" />
                      </label>
                      <span className="ml-3 text-sm text-slate-600">
                        Enable dark mode
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Profiles */}
            <div className="glass rounded-2xl shadow-glass-sm border border-white/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h3 className="font-semibold flex items-center">
                  <i className="fas fa-share-alt text-primary-500 mr-2" />
                  Social Profiles
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white mr-4">
                      <i className="fab fa-linkedin-in" />
                    </div>
                    <div className="flex-1 form-control">
                      <label htmlFor="linkedin" className="form-label">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        id="linkedIn"
                        className={`form-input ${
                          errors.socialProfiles?.linkedIn
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder="https://linkedin.com/in/username"
                        {...register("socialProfiles.linkedIn")}
                      />
                      <ErrorMessage error={errors.socialProfiles?.linkedIn} />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#333] flex items-center justify-center text-white mr-4">
                      <i className="fab fa-github" />
                    </div>
                    <div className="flex-1 form-control">
                      <label htmlFor="github" className="form-label">
                        GitHub
                      </label>
                      <input
                        type="text"
                        id="github"
                        className={`form-input ${
                          errors.socialProfiles?.github ? "border-red-500" : ""
                        }`}
                        placeholder="https://github.com/username"
                        {...register("socialProfiles.github")}
                      />
                      <ErrorMessage error={errors.socialProfiles?.github} />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#1da1f2] flex items-center justify-center text-white mr-4">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="flex-1 form-control">
                      <label htmlFor="twitter" className="form-label">
                        Twitter
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        className={`form-input ${
                          errors.socialProfiles?.twitter ? "border-red-500" : ""
                        }`}
                        placeholder="https://twitter.com/username"
                        {...register("socialProfiles.twitter")}
                      />
                      <ErrorMessage error={errors.socialProfiles?.twitter} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-4">
              <a
                href="index.html"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all font-medium"
              >
                Cancel
              </a>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient text-white rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all font-medium cursor-pointer"
                disabled={isSubmitting}
              >
                {pageTitle
                  ? isPending
                    ? "Updating..."
                    : "Update User"
                  : isSubmitting
                  ? "Creating..."
                  : "Create User"}
              </button>
            </div>
          </form>
        </section>
      </>
    </AppLayout>
  );
}

export default AddUser;
