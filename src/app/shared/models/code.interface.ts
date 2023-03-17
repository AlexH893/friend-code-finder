/*
 * Author: Alex Haefner
 * Date: 11.10.2021
 * Description: Interface for code
 * Sources:
 */

export interface Code {
  code: string;
  modified: Date;
  createdAt: Date;
  formattedCreatedAt: string;
  name: string;
  vivillion: string;
  flagged: Number;
}
