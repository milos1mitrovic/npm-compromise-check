/** A malicious package version that was published to npm. */
export interface Incident {
  packageName: string;
  version: string;
  /** ISO 8601 timestamp of when the malicious version was published. */
  publishedAt: string;
  /** ISO 8601 timestamp of when it was removed, or null if it is still live. */
  removedAt: string | null;
}
