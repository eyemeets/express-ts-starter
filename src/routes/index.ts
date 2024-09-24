import type { Request, Response } from 'express'

/**
 * Handles GET requests for '/', responding with a JSON message.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @returns A JSON object if the request is valid, or a 405 status if the method is not allowed.
 */
export const get = async (req: Request, res: Response) => {
  if (req.method !== 'GET') return res.status(405)

  return res.json({ hello: 'world' })
}