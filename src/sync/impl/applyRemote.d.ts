import type { Database } from '../..'

import type {
  SyncDatabaseChangeSet,
  SyncLog,
  SyncConflictResolver,
  SyncShouldUpdateRecord,
} from '../index'

export default function applyRemoteChanges(
  db: Database,
  remoteChanges: SyncDatabaseChangeSet,
  sendCreatedAsUpdated: boolean,
  log?: SyncLog,
  shouldUpdateRecord?: SyncShouldUpdateRecord,
  conflictResolver?: SyncConflictResolver,
  _unsafeBatchPerCollection?: boolean,
): Promise<void>
