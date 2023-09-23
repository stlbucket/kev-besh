export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  app: {
    Tables: {
      app_settings: {
        Row: {
          application_key: string
          display_name: string
          key: string
          value: string
        }
        Insert: {
          application_key: string
          display_name: string
          key: string
          value: string
        }
        Update: {
          application_key?: string
          display_name?: string
          key?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_settings_application_key_fkey"
            columns: ["application_key"]
            referencedRelation: "application"
            referencedColumns: ["key"]
          }
        ]
      }
      application: {
        Row: {
          key: string
          name: string
        }
        Insert: {
          key: string
          name: string
        }
        Update: {
          key?: string
          name?: string
        }
        Relationships: []
      }
      license: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          license_type_key: string
          resident_id: string
          status: Database["app"]["Enums"]["license_status"]
          tenant_id: string
          tenant_subscription_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          license_type_key: string
          resident_id: string
          status?: Database["app"]["Enums"]["license_status"]
          tenant_id: string
          tenant_subscription_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          license_type_key?: string
          resident_id?: string
          status?: Database["app"]["Enums"]["license_status"]
          tenant_id?: string
          tenant_subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "license_license_type_key_fkey"
            columns: ["license_type_key"]
            referencedRelation: "license_type"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "license_resident_id_fkey"
            columns: ["resident_id"]
            referencedRelation: "resident"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "license_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "tenant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "license_tenant_subscription_id_fkey"
            columns: ["tenant_subscription_id"]
            referencedRelation: "tenant_subscription"
            referencedColumns: ["id"]
          }
        ]
      }
      license_pack: {
        Row: {
          auto_subscribe: boolean
          created_at: string
          description: string
          display_name: string
          key: string
          updated_at: string
        }
        Insert: {
          auto_subscribe?: boolean
          created_at?: string
          description: string
          display_name: string
          key: string
          updated_at?: string
        }
        Update: {
          auto_subscribe?: boolean
          created_at?: string
          description?: string
          display_name?: string
          key?: string
          updated_at?: string
        }
        Relationships: []
      }
      license_pack_license_type: {
        Row: {
          expiration_interval_multiplier: number
          expiration_interval_type: Database["app"]["Enums"]["expiration_interval_type"]
          id: string
          license_pack_key: string
          license_type_key: string
          number_of_licenses: number
        }
        Insert: {
          expiration_interval_multiplier?: number
          expiration_interval_type?: Database["app"]["Enums"]["expiration_interval_type"]
          id?: string
          license_pack_key: string
          license_type_key: string
          number_of_licenses?: number
        }
        Update: {
          expiration_interval_multiplier?: number
          expiration_interval_type?: Database["app"]["Enums"]["expiration_interval_type"]
          id?: string
          license_pack_key?: string
          license_type_key?: string
          number_of_licenses?: number
        }
        Relationships: [
          {
            foreignKeyName: "license_pack_license_type_license_pack_key_fkey"
            columns: ["license_pack_key"]
            referencedRelation: "license_pack"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "license_pack_license_type_license_type_key_fkey"
            columns: ["license_type_key"]
            referencedRelation: "license_type"
            referencedColumns: ["key"]
          }
        ]
      }
      license_type: {
        Row: {
          application_key: string
          assignment_scope: Database["app"]["Enums"]["license_type_assignment_scope"]
          created_at: string
          display_name: string
          key: string
          updated_at: string
        }
        Insert: {
          application_key: string
          assignment_scope: Database["app"]["Enums"]["license_type_assignment_scope"]
          created_at?: string
          display_name: string
          key: string
          updated_at?: string
        }
        Update: {
          application_key?: string
          assignment_scope?: Database["app"]["Enums"]["license_type_assignment_scope"]
          created_at?: string
          display_name?: string
          key?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "license_type_application_key_fkey"
            columns: ["application_key"]
            referencedRelation: "application"
            referencedColumns: ["key"]
          }
        ]
      }
      license_type_permission: {
        Row: {
          license_type_key: string
          permission_key: string
        }
        Insert: {
          license_type_key: string
          permission_key: string
        }
        Update: {
          license_type_key?: string
          permission_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "license_type_permission_license_type_key_fkey"
            columns: ["license_type_key"]
            referencedRelation: "license_type"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "license_type_permission_permission_key_fkey"
            columns: ["permission_key"]
            referencedRelation: "permission"
            referencedColumns: ["key"]
          }
        ]
      }
      permission: {
        Row: {
          key: string
        }
        Insert: {
          key: string
        }
        Update: {
          key?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          avatar_key: string | null
          created_at: string
          display_name: string | null
          email: string
          first_name: string | null
          full_name: string | null
          id: string
          identifier: string | null
          is_public: boolean
          last_name: string | null
          phone: string | null
          status: Database["app"]["Enums"]["profile_status"]
          updated_at: string
        }
        Insert: {
          avatar_key?: string | null
          created_at?: string
          display_name?: string | null
          email: string
          first_name?: string | null
          full_name?: string | null
          id: string
          identifier?: string | null
          is_public?: boolean
          last_name?: string | null
          phone?: string | null
          status?: Database["app"]["Enums"]["profile_status"]
          updated_at?: string
        }
        Update: {
          avatar_key?: string | null
          created_at?: string
          display_name?: string | null
          email?: string
          first_name?: string | null
          full_name?: string | null
          id?: string
          identifier?: string | null
          is_public?: boolean
          last_name?: string | null
          phone?: string | null
          status?: Database["app"]["Enums"]["profile_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      resident: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          invited_by_display_name: string | null
          invited_by_profile_id: string | null
          profile_id: string | null
          status: Database["app"]["Enums"]["resident_status"]
          tenant_id: string
          tenant_name: string
          type: Database["app"]["Enums"]["resident_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          invited_by_display_name?: string | null
          invited_by_profile_id?: string | null
          profile_id?: string | null
          status?: Database["app"]["Enums"]["resident_status"]
          tenant_id: string
          tenant_name: string
          type: Database["app"]["Enums"]["resident_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          invited_by_display_name?: string | null
          invited_by_profile_id?: string | null
          profile_id?: string | null
          status?: Database["app"]["Enums"]["resident_status"]
          tenant_id?: string
          tenant_name?: string
          type?: Database["app"]["Enums"]["resident_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resident_invited_by_profile_id_fkey"
            columns: ["invited_by_profile_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "tenant"
            referencedColumns: ["id"]
          }
        ]
      }
      tenant: {
        Row: {
          created_at: string
          id: string
          identifier: string | null
          name: string
          status: Database["app"]["Enums"]["tenant_status"]
          type: Database["app"]["Enums"]["tenant_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          identifier?: string | null
          name: string
          status?: Database["app"]["Enums"]["tenant_status"]
          type?: Database["app"]["Enums"]["tenant_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          identifier?: string | null
          name?: string
          status?: Database["app"]["Enums"]["tenant_status"]
          type?: Database["app"]["Enums"]["tenant_type"]
          updated_at?: string
        }
        Relationships: []
      }
      tenant_subscription: {
        Row: {
          created_at: string
          id: string
          license_pack_key: string
          status: Database["app"]["Enums"]["tenant_subscription_status"]
          tenant_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          license_pack_key: string
          status?: Database["app"]["Enums"]["tenant_subscription_status"]
          tenant_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          license_pack_key?: string
          status?: Database["app"]["Enums"]["tenant_subscription_status"]
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_subscription_license_pack_key_fkey"
            columns: ["license_pack_key"]
            referencedRelation: "license_pack"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "tenant_subscription_tenant_id_fkey"
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
      application_license_count: {
        Args: {
          _application: unknown
        }
        Returns: number
      }
      license_pack_license_type_issued_count: {
        Args: {
          _license_pack_license_type: unknown
        }
        Returns: number
      }
    }
    Enums: {
      expiration_interval_type:
        | "none"
        | "day"
        | "week"
        | "month"
        | "quarter"
        | "year"
        | "explicit"
      license_status: "active" | "inactive" | "expired"
      license_type_assignment_scope:
        | "user"
        | "admin"
        | "superadmin"
        | "support"
        | "none"
        | "all"
      profile_status: "active" | "inactive" | "blocked"
      resident_status:
        | "invited"
        | "declined"
        | "active"
        | "inactive"
        | "blocked_individual"
        | "blocked_tenant"
        | "supporting"
      resident_type: "home" | "guest" | "support"
      tenant_status: "active" | "inactive" | "paused"
      tenant_subscription_status: "active" | "inactive"
      tenant_type: "anchor" | "customer" | "demo" | "test" | "trial"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

