export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  todo: {
    Tables: {
      todo: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_template: boolean
          location_id: string | null
          name: string
          ordinal: number
          parent_todo_id: string | null
          pinned: boolean
          resident_id: string | null
          root_todo_id: string
          status: Database["todo"]["Enums"]["todo_status"]
          tags: string[]
          tenant_id: string
          topic_id: string
          type: Database["todo"]["Enums"]["todo_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_template?: boolean
          location_id?: string | null
          name: string
          ordinal: number
          parent_todo_id?: string | null
          pinned?: boolean
          resident_id?: string | null
          root_todo_id: string
          status?: Database["todo"]["Enums"]["todo_status"]
          tags?: string[]
          tenant_id: string
          topic_id: string
          type?: Database["todo"]["Enums"]["todo_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_template?: boolean
          location_id?: string | null
          name?: string
          ordinal?: number
          parent_todo_id?: string | null
          pinned?: boolean
          resident_id?: string | null
          root_todo_id?: string
          status?: Database["todo"]["Enums"]["todo_status"]
          tags?: string[]
          tenant_id?: string
          topic_id?: string
          type?: Database["todo"]["Enums"]["todo_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "todo_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "location"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_parent_todo_id_fkey"
            columns: ["parent_todo_id"]
            referencedRelation: "todo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "todo_resident"
            referencedColumns: ["resident_id"]
          },
          {
            foreignKeyName: "todo_root_todo_id_fkey"
            columns: ["root_todo_id"]
            referencedRelation: "todo"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "todo_tenant"
            referencedColumns: ["tenant_id"]
          },
          {
            foreignKeyName: "todo_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "topic"
            referencedColumns: ["id"]
          }
        ]
      }
      todo_resident: {
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
            foreignKeyName: "todo_resident_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "resident"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_resident_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "todo_tenant"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
      todo_tenant: {
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
            foreignKeyName: "todo_tenant_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "tenant"
            referencedColumns: ["id"]
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
      todo_status: "incomplete" | "complete" | "archived" | "unfinished"
      todo_type: "task" | "milestone"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

