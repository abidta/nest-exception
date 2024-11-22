/*!
 * Original Source: https://github.com/nestjs/nest
 * Copyright (c) 2017-2024 Kamil Mysliwiec <https://kamilmysliwiec.com>
 *
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 * See the LICENSE file in the root directory for more information.
 *
 */
/**
 * System signals which shut down a process
 */
export enum ShutdownSignal {
  SIGHUP = 'SIGHUP',
  SIGINT = 'SIGINT',
  SIGQUIT = 'SIGQUIT',
  SIGILL = 'SIGILL',
  SIGTRAP = 'SIGTRAP',
  SIGABRT = 'SIGABRT',
  SIGBUS = 'SIGBUS',
  SIGFPE = 'SIGFPE',
  SIGSEGV = 'SIGSEGV',
  SIGUSR2 = 'SIGUSR2',
  SIGTERM = 'SIGTERM',
}
