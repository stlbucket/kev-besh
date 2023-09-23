export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  msg_api: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      deactivate_subscriber: {
        Args: {
          _subscriber_id: string
        }
        Returns: unknown
      }
      delete_topic: {
        Args: {
          _topic_id: string
        }
        Returns: boolean
      }
      upsert_message: {
        Args: {
          _message_info: unknown
        }
        Returns: unknown
      }
      upsert_subscriber: {
        Args: {
          _subscriber_info: unknown
        }
        Returns: unknown
      }
      upsert_topic: {
        Args: {
          _topic_info: unknown
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

