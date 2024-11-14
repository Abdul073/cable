export const FREE_QUOTA  = {
    maxEventsPerMonth: 100,
    maxEventCategories: 3,
} as const

export const PRO_QUOTA = {
    maxEventPerMonth: 1000,
    maxEventCategories: 10,
} as const