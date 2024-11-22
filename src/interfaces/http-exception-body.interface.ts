/*!
 * Original Source: https://github.com/nestjs/nest
 * Copyright (c) 2017-2024 Kamil Mysliwiec <https://kamilmysliwiec.com>
 *
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 * See the LICENSE file in the root directory for more information.
 *
 */

export type HttpExceptionBodyMessage = string | string[];

export interface HttpExceptionBody {
  message: HttpExceptionBodyMessage;
  error?: string;
  statusCode: number;
}
