export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  loc_api: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_location: {
        Args: {
          _location_info: unknown
        }
        Returns: unknown
      }
      delete_location: {
        Args: {
          _location_id: string
        }
        Returns: boolean
      }
      update_location: {
        Args: {
          _location_info: unknown
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

