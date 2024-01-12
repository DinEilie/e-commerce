export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cart: {
        Row: {
          created_at: string
          id: number
          is_large: boolean
          is_medium: boolean
          is_small: boolean
          is_xlarge: boolean
          product: number | null
          quantity: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_large?: boolean
          is_medium?: boolean
          is_small?: boolean
          is_xlarge?: boolean
          product?: number | null
          quantity?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_large?: boolean
          is_medium?: boolean
          is_small?: boolean
          is_xlarge?: boolean
          product?: number | null
          quantity?: number
          user_id?: string | null
        }
        Relationships: []
      }
      product: {
        Row: {
          brand: string
          category: string
          created_at: string
          description: string
          has_large_size: boolean
          has_medium_size: boolean
          has_small_size: boolean
          has_xlarge_size: boolean
          id: number
          image_url0: string
          image_url1: string
          image_url2: string
          image_url3: string
          is_on_sale: boolean
          large_quantity: number
          medium_quantity: number
          name: string
          price: number
          sale_discount: number
          sale_price: number
          small_quantity: number
          total_quantity: number
          type: string
          xlarge_quantity: number
        }
        Insert: {
          brand?: string
          category?: string
          created_at?: string
          description?: string
          has_large_size?: boolean
          has_medium_size?: boolean
          has_small_size?: boolean
          has_xlarge_size?: boolean
          id?: number
          image_url0?: string
          image_url1?: string
          image_url2?: string
          image_url3?: string
          is_on_sale?: boolean
          large_quantity?: number
          medium_quantity?: number
          name?: string
          price?: number
          sale_discount?: number
          sale_price?: number
          small_quantity?: number
          total_quantity?: number
          type?: string
          xlarge_quantity?: number
        }
        Update: {
          brand?: string
          category?: string
          created_at?: string
          description?: string
          has_large_size?: boolean
          has_medium_size?: boolean
          has_small_size?: boolean
          has_xlarge_size?: boolean
          id?: number
          image_url0?: string
          image_url1?: string
          image_url2?: string
          image_url3?: string
          is_on_sale?: boolean
          large_quantity?: number
          medium_quantity?: number
          name?: string
          price?: number
          sale_discount?: number
          sale_price?: number
          small_quantity?: number
          total_quantity?: number
          type?: string
          xlarge_quantity?: number
        }
        Relationships: []
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
