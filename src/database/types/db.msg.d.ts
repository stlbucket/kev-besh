export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  msg: {
    Tables: {
      message: {
        Row: {
          content: string
          created_at: string
          id: string
          posted_by_msg_resident_id: string
          status: Database["msg"]["Enums"]["message_status"]
          tags: string[]
          tenant_id: string
          topic_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          posted_by_msg_resident_id: string
          status?: Database["msg"]["Enums"]["message_status"]
          tags?: string[]
          tenant_id: string
          topic_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          posted_by_msg_resident_id?: string
          status?: Database["msg"]["Enums"]["message_status"]
          tags?: string[]
          tenant_id?: string
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_posted_by_msg_resident_id_fkey"
            columns: ["posted_by_msg_resident_id"]
            referencedRelation: "msg_resident"
            referencedColumns: ["resident_id"]
          },
          {
            foreignKeyName: "message_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "msg_tenant"
            referencedColumns: ["tenant_id"]
          },
          {
            foreignKeyName: "message_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "topic"
            referencedColumns: ["id"]
          }
        ]
      }
      msg_resident: {
        Row: {
          display_name: string
          resident_id: string
          tenant_id: string
        }
        Insert: {
          display_name: string
          resident_id: string
          tenant_id: string
        }
        Update: {
          display_name?: string
          resident_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "msg_resident_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "resident"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "msg_resident_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "msg_tenant"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
      msg_tenant: {
        Row: {
          name: string
          tenant_id: string
        }
        Insert: {
          name: string
          tenant_id: string
        }
        Update: {
          name?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "msg_tenant_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "tenant"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriber: {
        Row: {
          created_at: string
          id: string
          last_read: string
          msg_resident_id: string
          status: Database["msg"]["Enums"]["subscriber_status"]
          tenant_id: string
          topic_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_read?: string
          msg_resident_id: string
          status?: Database["msg"]["Enums"]["subscriber_status"]
          tenant_id: string
          topic_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_read?: string
          msg_resident_id?: string
          status?: Database["msg"]["Enums"]["subscriber_status"]
          tenant_id?: string
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriber_msg_resident_id_fkey"
            columns: ["msg_resident_id"]
            referencedRelation: "msg_resident"
            referencedColumns: ["resident_id"]
          },
          {
            foreignKeyName: "subscriber_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "msg_tenant"
            referencedColumns: ["tenant_id"]
          },
          {
            foreignKeyName: "subscriber_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "topic"
            referencedColumns: ["id"]
          }
        ]
      }
      topic: {
        Row: {
          created_at: string
          id: string
          identifier: string | null
          name: string
          status: Database["msg"]["Enums"]["topic_status"]
          tags: string[]
          tenant_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          identifier?: string | null
          name: string
          status?: Database["msg"]["Enums"]["topic_status"]
          tags?: string[]
          tenant_id: string
        }
        Update: {
          created_at?: string
          id?: string
          identifier?: string | null
          name?: string
          status?: Database["msg"]["Enums"]["topic_status"]
          tags?: string[]
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "msg_tenant"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      message_status: "draft" | "sent" | "deleted"
      subscriber_status: "active" | "inactive" | "blocked"
      topic_status: "open" | "closed" | "locked"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

