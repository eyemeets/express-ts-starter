import type { Request, Response } from 'express'

/**
 * Handles GET requests for dynamic routes with an ID.
 * @param req - The Express request object.
 * @param res - The Express response object.
 */
export const get = (req: Request, res: Response) => {
  const { id } = req.params // Get the dynamic ID from the request
  res.json({ message: `You requested dynamic ID: ${id}` })
}
