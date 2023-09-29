export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  app_api: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      activate_tenant: {
        Args: {
          _tenant_id: string
        }
        Returns: unknown
      }
      assume_residency: {
        Args: {
          _resident_id: string
        }
        Returns: unknown
      }
      become_support: {
        Args: {
          _tenant_id: string
        }
        Returns: unknown
      }
      block_resident: {
        Args: {
          _resident_id: string
        }
        Returns: unknown
      }
      create_tenant: {
        Args: {
          _name: string
          _identifier?: string
          _email?: string
          _type?: "anchor" | "customer" | "demo" | "test" | "trial"
        }
        Returns: unknown
      }
      current_profile_claims: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      deactivate_tenant: {
        Args: {
          _tenant_id: string
        }
        Returns: unknown
      }
      deactivate_tenant_subscription: {
        Args: {
          _tenant_subscription_id: string
        }
        Returns: unknown
      }
      decline_invitation: {
        Args: {
          _resident_id: string
        }
        Returns: unknown
      }
      demo_profile_residencies: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      exit_support_mode: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      get_ab_listings: {
        Args: {
          _profile_id: string
        }
        Returns: unknown[]
      }
      get_myself: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      grant_user_license: {
        Args: {
          _resident_id: string
          _license_type_key: string
        }
        Returns: unknown
      }
      join_address_book: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      leave_address_book: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      my_profile_residencies: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      reactivate_tenant_subscription: {
        Args: {
          _tenant_subscription_id: string
        }
        Returns: unknown
      }
      revoke_user_license: {
        Args: {
          _license_id: string
        }
        Returns: boolean
      }
      search_profiles: {
        Args: {
          _options: unknown
        }
        Returns: unknown[]
      }
      search_residents: {
        Args: {
          _options: unknown
        }
        Returns: unknown[]
      }
      search_tenants: {
        Args: {
          _options: unknown
        }
        Returns: unknown[]
      }
      site_user_by_id: {
        Args: {
          _id: string
        }
        Returns: Json
      }
      subscribe_tenant_to_license_pack: {
        Args: {
          _tenant_id: string
          _license_pack_key: string
        }
        Returns: unknown
      }
      tenant_licenses: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      tenant_profile_residencies: {
        Args: Record<PropertyKey, never>
        Returns: unknown[]
      }
      unblock_resident: {
        Args: {
          _resident_id: string
        }
        Returns: unknown
      }
      update_profile: {
        Args: {
          _display_name: string
          _first_name: string
          _last_name: string
          _phone?: string
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

