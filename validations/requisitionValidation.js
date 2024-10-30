const Joi = require('joi');

const requisitionSchema = Joi.object({
    request_id: Joi.string().max(50).required().messages({
        'string.base': `"request_id" should be a type of 'text'`,
        'string.empty': `"request_id" cannot be an empty field`,
        'string.max': `"request_id" length must be less than or equal to 50 characters long`,
        'any.required': `"request_id" is a required field`
    }),
    submitted_by: Joi.string().max(100).optional().messages({
        'string.base': `"submitted_by" should be a type of 'text'`,
        'string.max': `"submitted_by" length must be less than or equal to 100 characters long`
    }),
    recruiting_manager: Joi.string().max(100).optional().messages({
        'string.base': `"recruiting_manager" should be a type of 'text'`,
        'string.max': `"recruiting_manager" length must be less than or equal to 100 characters long`
    }),
    department: Joi.string().max(100).optional().messages({
        'string.base': `"department" should be a type of 'text'`,
        'string.max': `"department" length must be less than or equal to 100 characters long`
    }),
    required_by: Joi.date().optional().messages({
        'date.base': `"required_by" should be a valid date`
    }),
    reason_for_recruitment: Joi.string().max(100).optional().messages({
        'string.base': `"reason_for_recruitment" should be a type of 'text'`,
        'string.max': `"reason_for_recruitment" length must be less than or equal to 100 characters long`
    }),
    business_need: Joi.string().optional().messages({
        'string.base': `"business_need" should be a type of 'text'`
    }),
    no_of_vacancies: Joi.number().integer().min(1).optional().messages({
        'number.base': `"no_of_vacancies" should be a number`,
        'number.integer': `"no_of_vacancies" must be an integer`,
        'number.min': `"no_of_vacancies" must be at least 1`
    }),
    reports_to: Joi.string().max(100).optional().messages({
        'string.base': `"reports_to" should be a type of 'text'`,
        'string.max': `"reports_to" length must be less than or equal to 100 characters long`
    }),
    job_title: Joi.string().max(100).optional().messages({
        'string.base': `"job_title" should be a type of 'text'`,
        'string.max': `"job_title" length must be less than or equal to 100 characters long`
    }),
    employment_type: Joi.string().max(50).optional().valid("Full-time", "Part-time", "Contract").messages({
        'string.base': `"employment_type" should be a type of 'text'`,
        'string.max': `"employment_type" length must be less than or equal to 50 characters long`,
        'any.only': `"employment_type" must be one of [Full-time, Part-time, Contract]`
    }),
    experience: Joi.string().max(50).optional().messages({
        'string.base': `"experience" should be a type of 'text'`,
        'string.max': `"experience" length must be less than or equal to 50 characters long`
    }),
    justification: Joi.string().optional().messages({
        'string.base': `"justification" should be a type of 'text'`
    }),
    responsibilities: Joi.string().optional().messages({
        'string.base': `"responsibilities" should be a type of 'text'`
    }),
    skills: Joi.string().optional().messages({
        'string.base': `"skills" should be a type of 'text'`
    }),
    education: Joi.string().max(100).optional().messages({
        'string.base': `"education" should be a type of 'text'`,
        'string.max': `"education" length must be less than or equal to 100 characters long`
    }),
    work_experience: Joi.string().optional().messages({
        'string.base': `"work_experience" should be a type of 'text'`
    }),
    skills_qualifications: Joi.string().optional().messages({
        'string.base': `"skills_qualifications" should be a type of 'text'`
    }),
    budgetary_impact: Joi.string().optional().messages({
        'string.base': `"budgetary_impact" should be a type of 'text'`
    }),
    recommended_approach: Joi.string().max(100).optional().messages({
        'string.base': `"recommended_approach" should be a type of 'text'`,
        'string.max': `"recommended_approach" length must be less than or equal to 100 characters long`
    }),
    supporting_documents: Joi.binary().optional().messages({
        'binary.base': `"supporting_documents" should be a binary type`
    }),
    approval_history: Joi.string().optional().messages({
        'string.base': `"approval_history" should be a type of 'text'`
    }),
    date_posted: Joi.date().optional().messages({
        'date.base': `"date_posted" should be a valid date`
    }),
    status: Joi.string().valid(
        "ongoing",
        "paused",
        "in-review",
        "to publish",
        "cancelled",
        "hired",
        "denied",
        "onboarding",
        "closed"
    ).required().messages({
        'string.base': `"status" should be a type of 'text'`,
        'any.only': `"status" must be one of [ongoing, paused, in-review, to publish, cancelled, hired, denied, onboarding, closed]`,
        'any.required': `"status" is a required field`
    })
});

module.exports = requisitionSchema;
