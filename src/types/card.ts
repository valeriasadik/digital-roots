export interface Town {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly population?: number;
  readonly internet?: number;
}

export interface Community {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly members?: number;
  readonly type?: string;
}
