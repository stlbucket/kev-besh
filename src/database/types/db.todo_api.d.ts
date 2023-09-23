export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  todo_api: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_todo: {
        Args: {
          _todo_id: string
          _resident_id: string
        }
        Returns: unknown
      }
      create_todo: {
        Args: {
          _name: string
          _options: unknown
        }
        Returns: unknown
      }
      delete_todo: {
        Args: {
          _todo_id: string
        }
        Returns: boolean
      }
      pin_todo: {
        Args: {
          _todo_id: string
        }
        Returns: unknown
      }
      search_todos: {
        Args: {
          _options: unknown
        }
        Returns: unknown[]
      }
      unpin_todo: {
        Args: {
          _todo_id: string
        }
        Returns: unknown
      }
      update_todo: {
        Args: {
          _todo_id: string
          _name: string
          _description?: string
        }
        Returns: unknown
      }
      update_todo_status: {
        Args: {
          _todo_id: string
          _status: "incomplete" | "complete" | "archived" | "unfinished"
        }
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

