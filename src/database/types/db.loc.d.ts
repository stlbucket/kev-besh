export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  loc: {
    Tables: {
      loc_resident: {
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
            foreignKeyName: "loc_resident_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "resident"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loc_resident_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "loc_tenant"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
      loc_tenant: {
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
            foreignKeyName: "loc_tenant_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "tenant"
            referencedColumns: ["id"]
          }
        ]
      }
      location: {
        Row: {
          address1: string | null
          address2: string | null
          city: string | null
          country: string | null
          id: string
          lat: string | null
          lon: string | null
          name: string | null
          postal_code: string | null
          resident_id: string
          state: string | null
          tenant_id: string
        }
        Insert: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          id?: string
          lat?: string | null
          lon?: string | null
          name?: string | null
          postal_code?: string | null
          resident_id: string
          state?: string | null
          tenant_id: string
        }
        Update: {
          address1?: string | null
          address2?: string | null
          city?: string | null
          country?: string | null
          id?: string
          lat?: string | null
          lon?: string | null
          name?: string | null
          postal_code?: string | null
          resident_id?: string
          state?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "location_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "loc_resident"
            referencedColumns: ["resident_id"]
          },
          {
            foreignKeyName: "location_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "loc_tenant"
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

